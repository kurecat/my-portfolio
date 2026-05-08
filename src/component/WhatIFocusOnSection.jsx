import styled from "styled-components";
import { FiMonitor, FiCode, FiGitBranch, FiUsers } from "react-icons/fi";

import { colors } from "../Styles/theme";

const focusItems = [
  {
    icon: <FiMonitor size={28} />,
    title: "UI Implementation",
    subtitle: "화면 구현",
    description:
      "React를 활용해 사용자 화면을 컴포넌트 단위로 구성하고, 반응형 레이아웃과 기본적인 UI 상태를 고려해 구현합니다.",
  },
  {
    icon: <FiGitBranch size={28} />,
    title: "API Integration",
    subtitle: "데이터 연동",
    description:
      "Spring Boot 기반 API와 Axios를 활용해 데이터를 화면에 연결하고, 로딩·에러 상황을 사용자 흐름 안에서 처리하려고 합니다.",
  },
  {
    icon: <FiCode size={28} />,
    title: "Readable Code",
    subtitle: "코드 구조화",
    description:
      "단순히 동작하는 코드보다 컴포넌트 역할을 나누고, 이후 수정하기 쉬운 구조로 작성하는 것을 중요하게 생각합니다.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "User Flow",
    subtitle: "사용자 경험",
    description:
      "사용자가 화면에서 다음 행동을 자연스럽게 이해할 수 있도록 정보 배치, 버튼 위치, 피드백 메시지를 함께 고민합니다.",
  },
];

export default function WhatIFocusOnSection() {
  return (
    <Section id="focus">
      <Inner>
        <SectionHeader>
          <Eyebrow>What I Focus On</Eyebrow>
          <Title>
            사용자가 편하게 쓰는 화면을 위해
            <br />
            구현과 흐름을 함께 고민합니다
          </Title>
          <Description>
            프론트엔드 개발자로서 화면을 만드는 것에서 끝나지 않고, 데이터가
            연결되는 흐름과 사용자가 실제로 마주하는 경험까지 함께 생각하려고
            합니다.
          </Description>
        </SectionHeader>

        <FocusGrid>
          {focusItems.map((item, index) => (
            <FocusCard key={item.title}>
              <CardTop>
                <IconBox>{item.icon}</IconBox>
                <IndexText>{String(index + 1).padStart(2, "0")}</IndexText>
              </CardTop>

              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>{item.subtitle}</CardSubtitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </FocusCard>
          ))}
        </FocusGrid>
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
  max-width: 860px;
  margin-bottom: 56px;
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
  max-width: 720px;
  margin: 28px 0 0;
  color: ${colors.muted};
  font-size: 18px;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FocusCard = styled.article`
  min-height: 330px;
  padding: 28px;
  border-radius: 30px;
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 20px 50px rgba(31, 31, 31, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(59, 130, 246, 0.35);
    box-shadow: 0 28px 70px rgba(31, 31, 31, 0.09);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexText = styled.span`
  color: rgba(31, 31, 31, 0.16);
  font-size: 34px;
  font-weight: 950;
  letter-spacing: -0.07em;
`;

const CardContent = styled.div`
  margin-top: 56px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.045em;
`;

const CardSubtitle = styled.p`
  margin: 8px 0 0;
  color: ${colors.accent};
  font-size: 15px;
  font-weight: 800;
`;

const CardDescription = styled.p`
  margin: 20px 0 0;
  color: ${colors.muted};
  font-size: 15px;
  line-height: 1.75;
  word-break: keep-all;
`;
