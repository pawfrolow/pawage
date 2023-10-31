export const share = (canvas: HTMLCanvasElement, text: string) => {
  if ('share' in navigator) {
    canvas.toBlob(async (blob) => {
      if (blob) {
        const files = [new File([blob], 'image.png', { type: blob.type })]
        const shareData = {
          text: `${text} ${window.location.href}`,
          title: 'Pawage',
          files,
        }
        if (navigator.canShare(shareData)) {
          try {
            await navigator.share(shareData)
          } catch (err) {
            if (err instanceof Error && err.name !== 'AbortError') {
              console.error(err.name, err.message)
            }
          }
        } else {
          console.warn('Sharing not supported', shareData)
        }
      }
    })
  }
  else {
    canvas.toBlob(async (blob) => {
      if (blob) {
        const data = [new ClipboardItem({ [blob.type]: blob })];
        navigator.clipboard.write(data).then(
          () => {
            /* success */
          },
          () => {
            /* failure */
          },
        );
      }
    })
  }

}