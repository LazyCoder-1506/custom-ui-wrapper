import { ModalProp } from "./Modal.type"

function Modal({ open, closeHandler, children, title, width = 'sm', position = 'center' }: ModalProp ): JSX.Element {
  const widthStyle = (): string => {
    switch(width) {
      case "sm":
        return 'md:w-[50%]';
      case "md":
        return 'md:w-[75%]';
      default:
        return '';
    }
  }
  
  const positionStyle = (): string => {
    switch(position) {
      case "top-left":
        return 'items-start';
      case "top":
        return 'justify-center items-start';
      case "top-right":
        return 'justify-end items-start';
      case "left":
        return 'items-center';
      case "right":
        return 'justify-end items-center';
      case "bottom-left":
        return 'items-end'
      case "bottom":
        return 'justify-center items-end';
      case "bottom-right":
        return 'justify-end items-end'
      default:
        return 'justify-center items-center';
    }
  }
  
  return (
    <>
      <div className={(open ? "" : "hidden ") + "w-screen h-screen bg-black/50 z-500 fixed top-0 left-0 p-8 md:p-24"}>
        <div className={`flex w-full h-full ${positionStyle()}`}>
          <div className={`bg-white/100 rounded-md border p-4 w-full ${widthStyle()}`}>
            <div className="border-b border-gray-300 flex justify-between pb-2 mb-4">
              <p className="font-medium text-lg">
                {title}
              </p>
              <button type="button" data-testid="btn-close" className="w-8 h-8 rounded-full hover:bg-gray-500/10" onClick={closeHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal