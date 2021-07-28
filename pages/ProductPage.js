import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/product.scss";
import zo from "../img/zo.png";
import lo from "../img/loupe.png";
import star from "../img/star.png";
import big from "../img/big.png";
import cake from "../img/cake.png";
import ca from "../img/ca.png";
import caa from "../img/caa.png";
import loc from "../img/tool.png";
import down from "../img/down.png";
import menu from "../img/menu.png";
import mark from "../img/mark.png";
import spon from "../img/spp.png";

export default function ProductPage() {
  const [click, setClick] = useState(false);
  const [Calender, setCalender] = useState(true);
  const [Today, setToday] = useState(false);
  const [Tomorrow, setTomorrow] = useState(false);

  function Result(c) {
    if (c === "c") {
      setToday(false);
      setTomorrow(false);
      setCalender(true);
    } else if (c === "t") {
      setToday(true);
      setTomorrow(false);
      setCalender(false);
    } else if (c === "tom") {
      setToday(false);
      setTomorrow(true);
      setCalender(false);
    }
  }

  // _____________________________
  // ____________________________

  return (
    <div className="full-page">
      <div className="both-poster" style={{ marginTop: 23 }}>
        <div className="one-big">
          <img src={big} />
        </div>
        <div className="four-pic">
          <div className="one-two">
            <div className="one">
              <img src={cake} />
            </div>
            <div className="two">
              <img src={ca} />
            </div>
          </div>
          <div className="three-four">
            <div className="three">
              <img src={cake} />
            </div>
            <div className="four">
              <img src={caa} />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info-one">
          <h1>Dial a Cake</h1>
          <div className="all">
            <div className="black">Bakery - Bakery</div>
            <div className="add">Pandav Nagar</div>
            <div className="open">
              <span>Open now</span>10am-11pm(Today)
            </div>
          </div>
        </div>
        <div className="info-two">
          <div className="stars">
            <ul>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
            </ul>
            <div className="rating">4.5</div>
            <div className="re">13.6k Delivery reviews</div>
          </div>

          <div className="stars">
            <ul>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
            </ul>
            <div className="rating">4.5</div>
            <div className="re">127 Order review</div>
          </div>
          <div className="re"></div>
        </div>
      </div>

      <div className="buttons">
        <div className="style">
          <i class="fa fa-star-o" aria-hidden="true"></i>Add Review
        </div>
        <div className="style">
          <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Direction
        </div>
        <div className="style">
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>Bookmark
        </div>
        <div
          onClick={() => setClick(true)}
          className={click === false ? "style" : "style active"}
        >
          <i class="fa fa-share" aria-hidden="true"></i>Share
        </div>
      </div>

      <div className="panels">
        <div onClick={() => Result("c")} className="text">
          Overview
        </div>
        <div onClick={() => Result("t")} className="text">
          Order Online
        </div>
        <div onClick={() => Result("tom")} className="text">
          Review
        </div>
      </div>

      <div className="two-page">
        {Calender === true ? (
          <div className="full-overview">
            <div className="first-part">
              <h4>Category</h4>
              <div className="round">Blouse </div>

              <h4>Popular Dishes</h4>
              <p>
                Chocolate Crunch Cake, Exotic Fruit Cake, White Forest Cake,
                Chocolate Truffle Pastry,
                <br /> Pineapple Cake, Pastries
              </p>
              <h4>People Say This Place Is Known For</h4>
              <p>
                Good Service Good Quality, Pretty Decor, Coffee Date, Design,
                Good Packaging, Reasonable Prices
              </p>
              <h4>Average Cost</h4>
              <p>₹350 for two people (approx.)</p>
              <p>Cash and Cards accepted Digital payments accepted</p>
              <h4>More Info</h4>
              <ul>
                <li>
                  <img src={mark} />
                  Home Delivery
                </li>
                <li>
                  <img src={mark} />
                  Indoor Seating
                </li>
                <li>
                  <img src={mark} />
                  Desserts and Bakes
                </li>
              </ul>
              <h4>OUR SPONSORS</h4>
              <div className="hori">
                <div className="pict1">
                  <div className="actual">
                    <img src={spon} />
                  </div>
                  <h4 className="headd">Roadhouse Cafe</h4>
                  <div className="bothh-star">
                    <div className="bb">
                      <img src={star} />
                      4.6<span>(1,138)</span>
                    </div>
                    <div className="line"></div>
                    <div className="rr">
                      <img src={star} />
                      4.1<span>(1,138)</span>
                    </div>
                  </div>
                  <div className="piz">Bakery,Italian,Continental</div>
                </div>
              </div>

              <h4>Similar Restaurants</h4>
              <div className="state">
                <div className="similar">
                  <div className="onee">
                    <div className="act-pic">
                      <img src={cake} />
                    </div>
                    <h4 className="headd">Cake Port</h4>
                    <div className="bb">
                      <img src={star} />
                      4.6<span>(1,138)</span>
                    </div>
                    <text>Bakery</text>
                    <div className="piz">Laxmi Nager,New Delhi</div>
                  </div>
                </div>

                {/*  */}
                <div className="similar">
                  <div className="onee">
                    <div className="act-pic">
                      <img src={cake} />
                    </div>
                    <h4 className="headd">Cake Port</h4>
                    <div className="bb">
                      <img src={star} />
                      4.6<span>(1,138)</span>
                    </div>
                    <text>Bakery</text>
                    <div className="piz">Laxmi Nager,New Delhi</div>
                  </div>
                </div>

                {/*  */}
              </div>
              <div className="line"></div>
              <div className="space">HELP US MAKE WOOTailor BETTER</div>
              <h4 className="rep">Report an error in this listing</h4>
              <div className="help">
                Help us make WOOTailor more updated and relevant for everyone
              </div>
              <div className="now">
                Report now <i class="fa fa-caret-right" aria-hidden="true"></i>{" "}
              </div>
              <div className="foo" style={{ backgroundColor: "#fff" }}></div>
            </div>
          </div>
        ) : Today === true ? (
          <div className="full-order">
            <div className="left-side">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="Recommended"
                    spy={true}
                    smooth={true}
                  >
                    Recommended
                  </Link>
                </li>
                <li>
                  <Link to="Popular" spy={true} smooth={true}>
                    Popular
                  </Link>
                </li>
                <li>
                  <Link to="Trending" spy={true} smooth={true}>
                    Trending
                  </Link>
                </li>
                <li>
                  <Link to="new" spy={true} smooth={true}>
                    New
                  </Link>
                </li>
              </ul>
              <div className="si-line"></div>
            </div>
            <div className="right-side">
              <div id="Recommended">
                <div className="in">
                  {" "}
                  <h4>Online Order</h4>
                  <div className="se-ic">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search within menu"></input>
                  </div>
                </div>

                <div className="re-head">Recommended</div>
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ________________________________________ */}
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ____________________________________________ */}
              </div>
              <div id="Popular">
                <div className="in"></div>

                <div className="re-head">Popular</div>
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                    {/* <div className="addy">Add</div> */}
                  </div>
                </div>
                {/* ________________________________________ */}
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ____________________________________________ */}
              </div>
              <div id="Trending">
                <div className="in"></div>

                <div className="re-head">Trending</div>
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ________________________________________ */}
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ____________________________________________ */}
              </div>

              <div id="new">
                <div className="in"></div>

                <div className="re-head">New</div>
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
                {/* ________________________________________ */}
                <div className="card">
                  <div className="pho">
                    <img src={ca} />
                  </div>
                  <div className="all-fi">
                    <h5>Chocolate Crunch Cake</h5>
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                        <li>
                          <img src={star} />
                        </li>
                      </ul>

                      <span class="nb-review">177 votes</span>
                    </div>
                    <div className="rs">₹400</div>
                  </div>
                  <div className="all-sec">
                    <div className="addy">
                      <i class="fa fa-plus" aria-hidden="true"></i>Add
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : Tomorrow === true ? (
          <div className="full-review">
            <div className="lef-rev">
              <h4>Dial Cake Review</h4>
              <div className="flex">
                <div className="al-re">
                  <i class="fa fa-caret-down" aria-hidden="true"></i>All
                  Reviews(1030)
                </div>
                <div className="newest-fir">
                  <i className="fa fa-align-right"></i>Newest First
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
              {/* <div className="line"></div>0 */}
              <div className="review-card">
                <div className="user">
                  <div className="user-pic"></div>
                  <div className="name-other">
                    <h5>Geeta Joshi</h5>
                    <div className="re-fo">
                      <p>3 reviews</p>
                      <p>5 Followers</p>
                    </div>
                  </div>

                  <button>Follow</button>
                </div>

                <div className="stars-days">
                  <div className="stars">
                    <ul>
                      <li>
                        <img src={star} />
                      </li>
                      <li>
                        <img src={star} />
                      </li>
                      <li>
                        <img src={star} />
                      </li>
                      <li>
                        <img src={star} />
                      </li>
                      <li>
                        <img src={star} />
                      </li>
                    </ul>

                    <span class="nb-review">3.4</span>
                  </div>
                  <p>Yesterday</p>
                </div>

                <div className="comment">
                  name on the cake incorrect after mentioned it correctly
                </div>
                <div className="like-com">
                  <p>0 Likes</p>
                  <p>0 Comments</p>
                </div>
                <div className="l-c-s">
                  <p>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    Like
                  </p>
                  <p>
                    <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    Comment
                  </p>
                  <p>
                    <i className="fa fa-share" aria-hidden="true"></i>
                    Share
                  </p>
                </div>
              </div>
              {/* <div className="line"></div> */}
            </div>
            <div className="rig-rev">
              <h4>Rate your experience for</h4>
              <div className="in-la">
                <input type="radio"></input>
                <label>Overall Rating</label>

                <input type="radio"></input>
                <label>Fitting</label>

                <input type="radio"></input>
                <label>Delivery time</label>

                <input type="radio"></input>
                <label>Support</label>

                <input type="radio"></input>
                <label>Value for Money</label>

                <input type="radio"></input>

                <label>Finishing Quality</label>
              </div>
              <div className="stars">
                <ul>
                  <li>
                    <img src={star} />
                  </li>
                  <li>
                    <img src={star} />
                  </li>
                  <li>
                    <img src={star} />
                  </li>
                  <li>
                    <img src={star} />
                  </li>
                  <li>
                    <img src={star} />
                  </li>
                </ul>
              </div>
              <p>Add Comment</p>
              <input placeholder="comment"></input>
              <button>Submit</button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
