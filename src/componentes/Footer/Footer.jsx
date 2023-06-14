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
              졸업하고 인생을 전환하기로 결심하기 전까지는 영화와 텔레비전의
              프러덕션 디자인, 영화미술 팀장으로 일했습니다. 스페인어에 반해
              발렌시아에 와서 영화 연출 석사 학위를 받았고, 그곳에서 두 편의
              단편 영화를 만들었고 La Mostra València에서 상영했습니다.
              7여년간 번역가로 활동, 최근 프로젝트는 과학기술정보통신부 산하
              국가정보원(NIA)에서 추진하는 '인공지능 학습데이터 구축사업'에 번역
              품질 관리 팀장으로 참여했다. 저는 grado superior 디자인 수업을
              하면서, HTML과 CSS을 만났고, 저는 UX 디자인에 관심을 갖고 공부를
              이어갑니다. : UDEMI 에서 UX 디자인공부 후에, WordPress를 사용한 웹
              제작 수업 이수 후, 현재 ESAT에서 프론트엔드 웹 디자인 및 개발 전문
              대학원을 마치고 React, Javascript, WordPress, PHP, SASS with Git
              및 디지털 마케팅 SEO 등을 배우며 3개의 웹 프로젝트를
              진행하였습니다. 01공감력- 고객의 입장이 되어 고객의 요구와 관점을
              이해하고 시간이 지남에 따라 정확하고 확장 가능하며 지속 가능한
              비즈니스 모델을 달성할 수 있습니다. 역지사지를 바탕에 두며 늘
              사람을 생각하는 저의 성격이 드러나는 부분입니다. 02 다양한 분야-
              저는 다양한 분야에서 습득한 지식과 지식이 필요한 여러 분야에서
              새롭게 공부하고 일해 왔으며, 이를 통해 스스로가 그 분야마다 다르게
              직면한 문제점들을 마주하는 경험이 풍부하여, 그 어떤 분야가 되었든
              다양한 상황과 역할에 적응할 수 있는 장점이 있습니다. 03분석력-
              정보를 비판적이고 논리적으로 조사하고 처리하는 능력. 이를 통해
              다양한 정보들을 실질적인 상황에 접목, 조절하여
              효과적인 문제 해결을 추구합니다.
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
