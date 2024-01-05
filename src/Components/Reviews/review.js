import React from "react";
import "./review.css"

const Review = () => {
  return (
    <>
      <div className="container main-cont">
        <div class=" row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <p class="lead my-3 text-center">
              "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
              perspiciatis unde omnis."
            </p>
            <p class="font-italic font-weight-normal mb-0">- Anna Morian</p>
          </div>
          <div class="col-md-6 ">
            <div class="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <p class="lead my-3 text-center">
              "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
              adipiscing elit."
            </p>
            <p class="font-italic font-weight-normal ">- Teresa May</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review;