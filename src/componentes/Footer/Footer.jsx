import React, { useContext } from "react";
import "./Footer.scss";
import BacoderSmall from "../../assets/img/BacoderSmall";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <footer>
        <div className="footer__box">
          <Link className="page_about" to="/about">
            <p
              className={`footer__box_description ${
                themeContext.theme === "dark" ? "dark" : ""
              }`}
            >
              한국 부산 출신으로 어릴때부터 호기심이 매우 많았습니다. 영화학과를
              졸업하고 프러덕션 디자인회사에 취업 후 영화미술 팀장으로
              일했습니다. 인생의 전환점을 마련하고자 시작한 긴 여행을 위해
              스페인으로 와서 언어를 익히며 영화 연출 석사과정을 하며 연출한
              두편의 단편 영화를 La Mostra València에서 상영했습니다. 언어에
              반한 저는 7여년간 번역가로 활동, 최근 프로젝트는
              과학기술정보통신부 산하 국가정보원(NIA)에서 추진하는 '인공지능
              학습데이터 구축사업'에 번역 품질 관리 팀장으로 참여했습니다.
              번역업무와 병행한 grado superior 디자인 수업을 통해 UX 디자인,
              HTML과 CSS를 만났습니다. 현재 ESAT에서 프론트엔드 웹 디자인 및
              개발 전문 대학원에서 React, Javascript, WordPress, PHP, SASS
              with Git 및 디지털 마케팅 SEO 등을 배우며 3개의 웹 프로젝트를
              진행하였습니다. 저는 우수한 공감력과 다양한 분야에서 직면한
              문제점들을 마주하는 경험을 바탕으로 그 어떤 분야가 되었든 다양한
              상황과 역할에 적응할 수 있는 장점이 있습니다. 마지막으로 정보를
              비판적이고 논리적으로 조사하고 처리하는 능력, 이를 통해 다양한
              정보들을 실질적인 상황에 접목, 조절하여 효과적인 문제 해결을
              추구합니다.
            </p>
          </Link>

          <Link className="page_work" to="/Work">
            <BacoderSmall className="bacoder_s" />
          </Link>
        </div>
      </footer>
    </>
  );
}
