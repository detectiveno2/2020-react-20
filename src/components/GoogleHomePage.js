import React, { Component } from "react";
import "./../css/GoogleHomePage.css";

class GoogleHomePage extends Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
  }
  
  componentDidMount() {
    this.inputElement.current.focus();
  }
  
  render() {
    return (
      <div className="GoogleHomePage">
        <div className="Header">
          <ul>
            <li>
              <a href="#">Gmail</a>
            </li>
            <li>
              <a href="#">Hình ảnh</a>
            </li>
            <li>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <button>Đăng nhập</button>
            </li>
          </ul>
        </div>
        <div className="Body">
          <div className="Body-Wrapper">
            <img src="https://cdn.glitch.com/ee03803a-1e74-4b9e-bbb2-7ad23383fdb6%2Fgoogle.png?v=1589099793883" />
            <div className="Search-Area">
              <img
                className="Img SearchImg"
                src="https://image.flaticon.com/icons/svg/483/483356.svg"
                width="16px"
              />
              <img
                className="Img KeyBoardImg"
                src="https://image.flaticon.com/icons/svg/2358/2358917.svg"
                width="16px"
              />
              <img
                className="Img MicroPhoneImg"
                src="https://image.flaticon.com/icons/svg/2755/2755513.svg"
                width="16px"
              />
              <input type="text" ref={this.inputElement} />
            </div>
            <div className="Button-Area">
              <button>Tìm với google</button>
              <button>Xem trang đầu tiên tìm được</button>
            </div>
            <div className="text">
              <p>
                Google có các thứ tiếng:&nbsp;&nbsp; <a href="#">English</a>
                &nbsp;&nbsp;&nbsp;
                <a href="#">Français</a>&nbsp;&nbsp;&nbsp;
                <a href="#">中文（繁體）</a>
              </p>
            </div>
          </div>
        </div>
        <div className="Footer">
          <div><p>Việt Nam</p></div>
          <div className="Last-Footer">
            <ul>
              <li><a href="#">Quảng cáo</a></li>
              <li><a href="#">Doanh nghiệp</a></li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Các hoạt động tìm kiếm</a></li>
            </ul>
            <ul>
              <li><a href="#">Bảo mật</a></li>
              <li><a href="#">Điều khoản</a></li>
              <li><a href="#">Cài đặt</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleHomePage;
