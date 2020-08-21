import styled from "styled-components";

const StyledBody = styled.div`
  font-family: "Helvetica Neue, Helvetica, sans-serif";
  background: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
  min-height: 100%;
  color: #262;
  display: grid;
  grid: 74px 1fr max-content / 1fr;
  max-width: 100%;

  header,
  main,
  footer {
    padding: 0 16px;
  }
  header {
    background: #007340;
    box-shadow: 0 20px 50px -20px #007340;
    z-index: 1;
    display: grid;
    grid: 74px / 1fr 40px;
    align-content: center;
    align-items: center;
    img {
      border-radius: 100%;
      cursor: pointer;
    }
    a {
      display: flex;
      align-items: center;
      img {
        @media (max-width: 386px) {
          display: none;
        }
        border-radius: 0;
        height: 3-px;
      }
    }
  }
  #burgaz header {
    background-image: url("/burgaz.png");
  }

  #super-sanga header {
    background-image: url("/super-sanga.png");
  }

  #mctuckey .thumbnail-image {
    background-image: url(../images/stores/mctuckey.png);
  }

  #straya .thumbnail-image {
    background-image: url(../images/stores/straya.png);
  }

  #snags .thumbnail-image {
    background-image: url(../images/stores/snags.png);
  }

  #oi .thumbnail-image {
    background-image: url(../images/stores/oi.png);
  }

  #chips-mate .thumbnail-image {
    background-image: url(../images/stores/chips-mate.png);
  }

  #fridee-nights .thumbnail-image {
    background-image: url(../images/stores/fridee-nights.png);
  }

  #maccas .thumbnail-image {
    background-image: url(../images/stores/maccas.png);
  }
  main {
    padding-top: 24px;
    background: #fff;
    display: grid;
    grid:
      "store-search" max-content
      "main-delivery" max-content
      "store-list" 1fr / 1fr;
    grid-row-gap: 24px;
    #store-search-container {
      grid-area: store-search;
      border: 2px solid red;
      form {
        display: grid;
        grid: 1fr / 30px minmax(30px, 1fr);
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        border-bottom: 1px solid #8a8;
        img {
          width: 30px;
          height: 30px;
        }
      }
      input {
        border: none;
        outline: none;
        padding: 8px;
        font-size: 2rem;
        font-weight: bold;
        line-height: 2.4rem;
        background: transparent;
        color: #262;
        ::placeholder {
          color: #aca;
          font-weight: normal;
        }
      }
    }
    #main-delivery-container {
      grid-area: main-delivery;
      display: grid;
      grid: repeat(2, max-content) / auto-flow minmax(max-content, 1fr) minmax(
          max-content,
          3fr
        );
      @media (max-width: 454px) {
        grid: repeat(4, max-content) / 1fr;
      }
      grid-gap: 8px;
      padding-top: 16px;
      .main-delivery-label {
        color: #535331;
        font-weight: 400;
      }
      .main-delivery-choice {
        border: 1px solid #262;
        padding: 8px;
      }
    }
    #store-list-container {
      grid-area: store-list;
      h2 {
        font-size: 2.2rem;
        font-weight: 400;
        margin-top: 16px;
        margin-bottom: 32px;
      }
      ul {
        list-style: none;
        padding-inline-start: 0;
        a {
          text-decoration: none;
          color: #262626;
        }
        li article {
          background: #fd6;
          padding-bottom: 20px;
          p:last-of-type {
            img {
              width: 14px;
              height: 14px;
            }
            span {
              padding: 4px 8px;
              background: #007340;
              color: #fff;
            }
          }
          h3 {
            color: #007340;
            font-size: 1.6rem;
            font-weight: 400;
            margin-top: 10px;
            padding: 0 10px;
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
          }
          .thumbnail-image {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 200px;
          }
        }
      }
    }
  }
  footer {
    background: #fd0;
  }
`;

const UberEats = () => {
  return (
    <StyledBody>
      <header>
        <a href="#">
          <img src="/site-logo.svg" alt="Aussie Tucker" />
        </a>
        <img src="/profile-logo.svg" alt="Profile Settings" />
      </header>
      <main>
        <div id="store-search-container">
          <form>
            <img src="/store-search-icon.svg" />
            <input type="text" placeholder="Search for a place to eat" />
          </form>
        </div>{" "}
        <div id="main-delivery-container">
          <div className="main-delivery-label">When</div>
          <div className="main-delivery-choice">ASAP</div>
          <div className="main-delivery-label">To</div>
          <div className="main-delivery-choice">123 Main St</div>
        </div>
        <section id="store-list-container">
          <h2>Food Delivery in Medellin</h2>
          <ul>
            <li>
              <a href="#">
                <article id="burgaz">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Burgaz</h3>
                  </header>
                  <p>
                    $ &middot; Fast Food &middot; BBQ &middot; Burger &middot;
                    Halal
                  </p>
                  <p>
                    <span>20-30 min</span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="super-sanga">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Super Sanga</h3>
                  </header>
                  <p>
                    $ &middot; Sandwich &middot; Breakfast and brunch &middot;
                    Healthy
                  </p>
                  <p>
                    <span>10-20 min</span>
                    <span>
                      4.4
                      <img
                        src="images/icons/hot-fire-white.svg"
                        alt="Hot Fire White"
                      />
                      (78)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="mctuckey">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>McTuckey</h3>
                  </header>
                  <p>$ &middot; Chicken &middot; Healthy</p>
                  <p>
                    <span>10-20 min</span>
                    <span>
                      4.5
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (336)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="straya">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Straya</h3>
                  </header>
                  <p>$ &middot; Fast Food &middot; Pies</p>
                  <p>
                    <span>5-10 min</span>
                    <span>
                      4.9
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (5604)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="snags">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Snags</h3>
                  </header>
                  <p>$ &middot; Meat &middot; Barbeque &middot; Fast Food</p>
                  <p>
                    <span>15-25 min</span>
                    <span>
                      4.8
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (124)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="oi">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Oi!!</h3>
                  </header>
                  <p>$ &middot; Classic &middot; Salty &middot; Beautiful</p>
                  <p>
                    <span>10-20 min</span>
                    <span>
                      5.0
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (1535)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="chips-mate">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Chips Mate</h3>
                  </header>
                  <p>$ &middot; Fast Food &middot; Potatoes</p>
                  <p>
                    <span>10-15 min</span>
                    <span>
                      4.6
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (2044)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="fridee-nights">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Fridee Nights</h3>
                  </header>
                  <p>
                    $ &middot; Seafood &middot; Dinner Time &middot; Fast Food
                  </p>
                  <p>
                    <span>25-40 min</span>
                    <span>
                      4.9
                      <img
                        src="images/icons/hot-fire-gold.svg"
                        alt="Hot Fire Gold"
                      />
                      (1604)
                    </span>
                  </p>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article id="maccas">
                  <header>
                    <div class="thumbnail-image"></div>
                    <h3>Maccas</h3>
                  </header>
                  <p>
                    $ &middot; Fast Food &middot; Fries &middot; Nuggets
                    &middot; Burgers
                  </p>
                  <p>
                    <span>20-25 min</span>
                    <span>
                      3.8
                      <img
                        src="images/icons/hot-fire-white.svg"
                        alt="Hot Fire White"
                      />
                      (98)
                    </span>
                  </p>
                </article>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>Footer goes here</footer>
    </StyledBody>
  );
};

export default UberEats;
