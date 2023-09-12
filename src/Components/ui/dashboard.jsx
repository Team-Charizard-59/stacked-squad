function Dashboard () {
  return (
    <div className="w-screen border-black border-2 rounded-3xl">
      <div className="flex gap-40 m-4">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
          Filter
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
          Create Lobby
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Dashboard