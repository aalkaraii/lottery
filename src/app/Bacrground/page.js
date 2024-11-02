import React from "react";

// Child Component Level 3
function ChildLevel3({ message }) {
  return (
    <div>
      <h3>Child Level 3</h3>
      <p>Message: {message}</p>
    </div>
  );
}

// Child Component Level 2
function ChildLevel2({ message }) {
  return (
    <div>
      <h2>Child Level 2</h2>
      <ChildLevel3 message={message} />
    </div>
  );
}

// Child Component Level 1
function ChildLevel1({ message }) {
  return (
    <div>
      <h1>Child Level 1</h1>
      <ChildLevel2 message={message} />
    </div>
  );
}

// Parent Component
function Parent() {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildLevel1 message={message} />
    </div>
  );
}

export default Parent;
