import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Review() {
  const [parent, enable] = useAutoAnimate({ duration: 500 });
  const [items, setItems] = useState(defaultItems);
  const [isEnabled, setIsEnabled] = useState(true);

  function toggleEnabled() {
    enable(!isEnabled);
    setIsEnabled(!isEnabled);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    if (name) {
      setItems((prev) => [{ name }, ...prev]);
      event.target.elements.name.value = "";
    }
  }

  return (
    <div className="p-8 space-y-4">
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          id="name"
          className="border-2 border-blue-500 rounded-lg mr-2 p-1"
          placeholder="Add new event"
        />
        <button className="bg-blue-500 text-white rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
      <h1 className="flex justify-center w-full">Upcoming Events</h1>
      <div ref={parent} className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <GridItem key={item.name} item={item} />
        ))}
      </div>
      <div className="flex items-center space-x-1">
        <input
          onChange={toggleEnabled}
          type="checkbox"
          id="enabled"
          checked={isEnabled}
        />
        <label htmlFor="enabled">Animations Enabled</label>
      </div>
    </div>
  );
}

function GridItem({ item }) {
  return (
    <div className="border-2 space-y-4 border-gray-200 rounded-lg p-2">
      <div className="font-bold">{item.name}</div>
    </div>
  );
}

const defaultItems = [
  { name: "Christmas" },
  { name: "New Years Eve" },
  { name: "Halloween" }
];

export default Review;
