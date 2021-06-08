export const SavedView = ({ jokeFromDB }) => {
  return (
    <div className="saved-view-container">
      <h2>Saved Jokes</h2>
      <div className="view-panel">
        <p>{jokeFromDB}</p>
      </div>
    </div>
  )
}
