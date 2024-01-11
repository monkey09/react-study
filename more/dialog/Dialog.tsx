import { RefObject, useEffect, useRef } from "react"

export function Dialog() {
  const updateButton = useRef<HTMLButtonElement>(null)
  const cancelButton = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  function openCheck(dialog: RefObject<HTMLDialogElement>) {
    if (dialog && dialog.current && dialog.current.open) {
      console.log("Dialog open")
    } else {
      console.log("Dialog closed")
    }
  }

  useEffect(() => {
    if (updateButton && updateButton.current && cancelButton && cancelButton.current) {
      
      updateButton.current.addEventListener("click", () => {
        dialog && dialog.current && dialog.current.showModal()
        openCheck(dialog)
      })
  
      
      cancelButton.current.addEventListener("click", () => {
        dialog && dialog.current && dialog.current.close()
        openCheck(dialog)
      })
    }
    if (dialog && dialog.current) {
      return () => dialog.current!.close()
    }
  }, [updateButton, cancelButton, dialog])
  

 return (
  <>
    <dialog ref={dialog}>
      <form method="dialog">
        <p>
          <label>Favorite animal:</label>
          <select id="favAnimal" name="favAnimal">
            <option></option>
            <option>Brine shrimp</option>
            <option>Red panda</option>
            <option>Spider monkey</option>
          </select>
        </p>
        <div>
          <button ref={cancelButton} type="reset">Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </dialog>
    <div>
      <button ref={updateButton}>Update details</button>
    </div>
  </>
 )
}
