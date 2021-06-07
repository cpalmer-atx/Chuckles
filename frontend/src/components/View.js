export const View = ({ jokeFromAPI, fetchFromAPI }) => {
  return (
    <>
      <button className="btn"
              onClick={fetchFromAPI}
              >Get new joke
      </button>
      <div className="view-panel">
        <p>{jokeFromAPI}</p>
      </div>
    </>
  )
}
