function MeetupErrorFallback({error, resetErrorBoundary}) {
    return (
      <div>
        There was an error:
        <div>{error}</div>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
}

export default MeetupErrorFallback;