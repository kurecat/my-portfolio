import styled from "styled-components";
import {
  FiSearch,
  FiLayers,
  FiCode,
  FiLink,
  FiRefreshCw,
} from "react-icons/fi";

import { colors } from "../Styles/theme";

const processSteps = [
  {
    icon: <FiSearch size={26} />,
    title: "Understand",
    subtitle: "요구사항 이해",
    description:
      "먼저 만들 기능의 목적과 사용자가 어떤 흐름으로 화면을 이용할지 정리합니다. 필요한 데이터와 API 흐름도 함께 확인합니다.",
  },
  {
    icon: <FiLayers size={26} />,
    title: "Structure",
    subtitle: "컴포넌트 구조 설계",
    description:
      "화면을 역할별 컴포넌트로 나누고, 재사용 가능한 UI와 상태가 필요한 영역을 구분해 구조를 잡습니다.",
  },
  {
    icon: <FiCode size={26} />,
    title: "Build",
    subtitle: "UI 구현",
    description:
      "React와 JavaScript를 기반으로 화면을 구현하고, 반응형 레이아웃과 사용자 인터랙션을 고려해 완성도를 높입니다.",
  },
  {
    icon: <FiLink size={26} />,
    title: "Connect",
    subtitle: "API 연동",
    description:
      "Axios를 활용해 백엔드 API와 데이터를 연결하고, 로딩·에러·빈 데이터 상황을 화면 흐름 안에서 처리합니다.",
  },
  {
    icon: <FiRefreshCw size={26} />,
    title: "Improve",
    subtitle: "검토와 개선",
    description:
      "동작 여부만 확인하지 않고, 코드 가독성·컴포넌트 분리·사용자 흐름을 다시 점검하며 개선합니다.",
  },
];

export default function DesignProcessSection() {
  return (
    <Section id="process">
      <Inner>
        <SectionHeader>
          <Eyebrow>Development Process</Eyebrow>
          <Title>
            화면을 구현하기 전,
            <br />
            흐름과 구조를 먼저 정리합니다
          </Title>
          <Description>
            프로젝트를 진행할 때는 바로 코드를 작성하기보다 요구사항, 데이터
            흐름, 컴포넌트 구조를 먼저 정리하려고 합니다. 이 과정을 통해
            유지보수하기 쉬운 화면을 만드는 것을 목표로 합니다.
          </Description>
        </SectionHeader>

        <Timeline>
          {processSteps.map((step, index) => (
            <StepCard key={step.title}>
              <StepNumber>{String(index + 1).padStart(2, "0")}</StepNumber>
              <IconBox>{step.icon}</IconBox>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepSubtitle>{step.subtitle}</StepSubtitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepCard>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.background};
  border-top: 1px solid ${colors.border};
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 32px;

  @media (max-width: 768px) {
    padding: 88px 24px;
  }
`;

const SectionHeader = styled.div`
  max-width: 880px;
  margin-bottom: 64px;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 800;
`;

const Title = styled.h2`
  margin: 0;
  color: ${colors.text};
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1.18;
  font-weight: 950;
  letter-spacing: -0.055em;
  word-break: keep-all;

  @media (max-width: 640px) {
    letter-spacing: -0.045em;
  }
`;

const Description = styled.p`
  max-width: 760px;
  margin: 28px 0 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 18px;

  &::before {
    content: "";
    position: absolute;
    left: 39px;
    top: 20px;
    bottom: 20px;
    width: 1px;
    background: rgba(31, 31, 31, 0.12);
  }

  @media (max-width: 640px) {
    &::before {
      display: none;
    }
  }
`;

const StepCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 80px 72px 1fr;
  gap: 24px;
  align-items: flex-start;
  padding: 28px;
  border-radius: 30px;
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 20px 50px rgba(31, 31, 31, 0.05);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.34);
    box-shadow: 0 28px 70px rgba(31, 31, 31, 0.08);
  }

  @media (max-width: 768px) {
    grid-template-columns: 64px 1fr;
    gap: 18px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StepNumber = styled.span`
  color: rgba(31, 31, 31, 0.18);
  font-size: 42px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.07em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconBox = styled.div`
  position: relative;
  z-index: 1;
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: ${colors.accent};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 34px rgba(59, 130, 246, 0.22);

  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
    border-radius: 20px;
  }
`;

const StepContent = styled.div`
  padding-top: 2px;
`;

const StepTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: 26px;
  font-weight: 950;
  letter-spacing: -0.05em;
`;

const StepSubtitle = styled.p`
  margin: 8px 0 0;
  color: ${colors.accent};
  font-size: 15px;
  font-weight: 850;
`;

const StepDescription = styled.p`
  max-width: 820px;
  margin: 16px 0 0;
  color: ${colors.muted};
  font-size: 16px;
  line-height: 1.75;
  word-break: keep-all;
`;
