function App() {
  // Member Function :: ACTION HAPPEN HERE
  let readAllGreetings = () => {
    console.log("Handling Event...onclick event!");
  };

  // UI - RENDER
  return (
    <div>
      <h1>REST API </h1>
      <input
        type="button"
        value="Read All Greetings"
        onClick={readAllGreetings}
      />
    </div>
  );
}

export default App;
