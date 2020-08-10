import styled from "styled-components";

const StyledBody = styled.body`
  #monthly-calendar {
    display: inline-grid;
    grid-template-columns: repeat(7, 10vmin);
    grid-template-rows: 10vmin 3vmin;
    grid-auto-rows: 10vmin;
    grid-gap: 1px;
    background: #fff;
    header {
      grid-column: span 7;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      color: #fff;
      h1 {
        font-size: 4vmin;
      }
    }
    .day-header-field {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vmin;
      font-weight: bold;
    }
    .day-field {
      font-size: 2vmin;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #bbb;
      background: #ddd;
    }
    .not-current-month {
      background: transparent;
    }
  }
`;

const Calendar = () => {
  return (
    <StyledBody>
      <div id="monthly-calendar">
        <header>
          <h1>April</h1>
        </header>
        <div class="day-header-field">S</div>
        <div class="day-header-field">M</div>
        <div class="day-header-field">T</div>
        <div class="day-header-field">W</div>
        <div class="day-header-field">T</div>
        <div class="day-header-field">F</div>
        <div class="day-header-field">S</div>
        <div class="day-field not-current-month">31</div>
        <div class="day-field">1</div>
        <div class="day-field">2</div>
        <div class="day-field">3</div>
        <div class="day-field">4</div>
        <div class="day-field">5</div>
        <div class="day-field">6</div>
        <div class="day-field">7</div>
        <div class="day-field">8</div>
        <div class="day-field">9</div>
        <div class="day-field">10</div>
        <div class="day-field">11</div>
        <div class="day-field">12</div>
        <div class="day-field">13</div>
        <div class="day-field">14</div>
        <div class="day-field">15</div>
        <div class="day-field">16</div>
        <div class="day-field">17</div>
        <div class="day-field">18</div>
        <div class="day-field">19</div>
        <div class="day-field">20</div>
        <div class="day-field">21</div>
        <div class="day-field">22</div>
        <div class="day-field">23</div>
        <div class="day-field">24</div>
        <div class="day-field">25</div>
        <div class="day-field">26</div>
        <div class="day-field">27</div>
        <div class="day-field">28</div>
        <div class="day-field">29</div>
        <div class="day-field">30</div>
        <div class="day-field not-current-month">1</div>
        <div class="day-field not-current-month">2</div>
        <div class="day-field not-current-month">3</div>
        <div class="day-field not-current-month">4</div>
      </div>
    </StyledBody>
  );
};

export default Calendar;
