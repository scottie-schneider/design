import styled from "styled-components";

const StyledBody = styled.body`
  .top {
    display: grid;
    place-items: center center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    background: #fff;
    border-bottom: 3px solid rgba(0, 0, 0, 0.5);
    h1 {
      margin: 0;
    }
  }
  main {
    width: 100%;
    padding: 10px;
    margin-top: 46px;
    display: grid;
    grid: "feed" max-content / 85vw;
    justify-content: center;
    grid-gap: 10px;
  }
  .tile {
    padding: 10px 12px;
    background: #fff;
  }
  #profile-tile {
    display: block;
    grid-area: profile;
  }
  #trending-tile {
    display: block;
    grid-area: trending;
  }
  #feed-tile {
    grid-area: feed;
  }
  #notice-tile {
    display: block;
    grid-area: notice;
  }
  #follow-tile {
    display: block;
    grid-area: follow;
  }
  #links-tile {
    display: block;
    grid-area: links;
  }
  @media (min-width: 910px) {
    main {
      grid:
        "profile feed" 214px
        "notice feed" 360px
        "follow feed" 455px
        "trending feed" 488px
        "links feed" 163px
        ". feed" max-content / 209px 588px;
    }
  }
  @media (min-width: 1238px) {
    main {
      grid:
        "profile feed notice" 214px
        "trending feed notice" 136px
        "trending feed follow" 334px
        ". feed follow" 130px
        ". feed links" 163px
        ". feed ." max-content / 209px 588px 300px;
    }
  }
`;

const Twitter = () => {
  return (
    <StyledBody>
      <header className="top">
        <h1>Top Bar</h1>
      </header>
      <main>
        <article id="profile-tile" class="tile">
          <header>
            <h2>Profile Area</h2>
          </header>
        </article>
        <section id="feed-tile" class="tile">
          <header>
            <h2>Feed</h2>
          </header>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
          <p>
            Interdum, ridiculus rutrum vitae urna rhoncus. Est at mattis congue
            donec cum neque torquent. Ac ipsum metus pellentesque habitasse
            venenatis magnis sagittis condimentum condimentum. Nostra senectus
            urna tristique urna vel montes. Magna cubilia in nulla. Adipiscing
            elementum proin ac habitant nisi congue rutrum aliquam duis
            himenaeos. Conubia potenti sapien proin adipiscing potenti netus.
            Iaculis erat dolor montes lobortis rutrum mauris. Natoque justo
            praesent diam auctor. Etiam taciti curae; rutrum eros gravida eu
            arcu amet eget interdum. Blandit etiam senectus molestie posuere
            primis sed.
          </p>
        </section>
        <aside id="trending-tile" class="tile">
          <header>
            <h2>Trending</h2>
          </header>
        </aside>
        <article id="notice-tile" class="tile">
          <header>
            <h2>Notice</h2>
          </header>
        </article>
        <aside id="follow-tile" class="tile">
          <header>
            <h2>Follow</h2>
          </header>
        </aside>
        <aside id="links-tile" class="tile">
          <header>
            <h2>Links</h2>
          </header>
        </aside>
      </main>
    </StyledBody>
  );
};

export default Twitter;
