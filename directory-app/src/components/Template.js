import React from "react";
import data from "../data";

export default function Template(props) {
  return (
    <div class="template-container">
      <h1 class="right-justify">
        {data[props.index].id}/{data.length}
      </h1>
        <div class="space-break">
          <h1 class="underline">
            {data[props.index].name.first} {data[props.index].name.last}
          </h1>
        </div>
        <div class="space-break">
          <h3>
            From:{" "}
            <span class="unbolded">
              {data[props.index].city}, {data[props.index].country}
            </span>
          </h3>
          <h3>
            Job Title: <span class="unbolded">{data[props.index].title}</span>
          </h3>
          <h3>
            Employer: <span class="unbolded">{data[props.index].employer}</span>
          </h3>
        </div>
        <div class="space-break">
          <h3>
            Favorite Movies:{" "}
            <span class="unbolded">
              <ol>
                <li>{data[props.index].favoriteMovies[0]}</li>
                <li>{data[props.index].favoriteMovies[1]}</li>
                <li>{data[props.index].favoriteMovies[2]}</li>
              </ol>
            </span>
          </h3>
        </div>
    </div>
  );
}
