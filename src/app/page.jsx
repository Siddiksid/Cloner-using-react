"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Victor",
    },
  ]);

  return (
    <main
      style={{
        display: "flex",
        gap: "5rem",
        flexDirection: "column",
      }}
    >
      <div className="parent">
        {pets.map((pet) => {
          return (
            <div className="box" key={pet.id}>
              <p>Id:{pet.id}</p>
              <h2>{pet.name}</h2>
              <img src="https://i.ibb.co/rpmwD8W/victor.png" alt="dog" />
              <button
                onClick={() => {
                  setPets((prev) => [
                    ...prev,
                    {
                      id: Number(prev[prev.length - 1].id) + 1,
                      name: "Victor",
                    },
                  ]);
                }}
              >
                Clone!
              </button>
            </div>
          );
        })}
      </div>
      <div className="select-box">
        <label htmlFor="remove" style={{ margin: "10px" }}>
          Select Clone to remove
        </label>
        <select
          onChange={(e) => {
            let arr = pets.filter((pet) => Number(e.target.value) != pet.id);

            setPets(arr);
          }}
        >
          {pets.map((item) => {
            return (
              <option key={item.id} value={Number(item.id)}>
                {Number(item.id)}
              </option>
            );
          })}
        </select>
      </div>
    </main>
  );
}
