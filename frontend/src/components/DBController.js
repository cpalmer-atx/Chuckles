export const DBController = ({ fetchFromDB, updateFromDB, deleteFromDB }) => {
  return (
    <div className="ctrl-btns">
      <button className="ctrl-btn"
              onClick={fetchFromDB}
              >Get
      </button>
      <button className="ctrl-btn"
              onClick={updateFromDB}
              >Update
      </button>
      <button className="ctrl-btn"
              onClick={deleteFromDB}
              >Delete
      </button>
    </div>
  )
}
