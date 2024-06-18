import * as React from 'react';

function HomeCard({article}) {
  console.log('----->',article)
  return (
    <div className="cardHomeSmall">
      <img
        className="card-img"
        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Albert_Einstein_sticks_his_tongue_1951.jpg"
        srcset="https://upload.wikimedia.org/wikipedia/commons/5/5a/Albert_Einstein_sticks_his_tongue_1951.jpg"
      />

      <content className="card-content">
        <h2>title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ullam? Ipsum voluptates dolorem fugit ab iste facilis
          eligendi, quas soluta numquam nisi quis debitis et nemo accusantium
          saepe labore tempore?
        </p>
      </content>
    </div>
  );
}

export default HomeCard;
