import styled from "styled-components";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";

import { colors } from "../Styles/theme";

const skillGroups = [
  {
    icon: <FiCode size={26} />,
    category: "Frontend",
    description:
      "사용자 화면을 구성하고 API 데이터를 연결하는 프론트엔드 구현 경험이 있습니다.",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Axios", "Responsive UI"],
  },
  {
    icon: <FiServer size={26} />,
    category: "Backend / API",
    description:
      "Spring Boot 기반 API를 만들고 프론트엔드와 연결하며 서비스 흐름을 이해했습니다.",
    skills: ["Java", "Spring Boot", "REST API", "C#", "Server Logic"],
  },
  {
    icon: <FiDatabase size={26} />,
    category: "Database",
    description:
      "데이터 모델링과 SQL 작성 경험을 바탕으로 데이터 흐름을 함께 고려합니다.",
    skills: ["OracleDB", "MySQL", "SQL", "PL/SQL", "Data Modeling"],
  },
  {
    icon: <FiTool size={26} />,
    category: "Tools & Collaboration",
    description:
      "팀 프로젝트에서 버전 관리, 문서 정리, 화면 설계 도구를 활용했습니다.",
    skills: ["Git", "GitHub", "Figma", "Notion", "Tableau"],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Inner>
        <SectionHeader>
          <Eyebrow>Skills & Tools</Eyebrow>
          <Title>
            기술을 단순히 나열하기보다
            <br />
            어떻게 활용했는지 보여주고자 합니다
          </Title>
          <Description>
            프론트엔드 구현을 중심으로 백엔드 API, 데이터베이스, 협업 도구까지
            함께 경험하며 서비스가 동작하는 전체 흐름을 이해하려고 노력했습니다.
          </Description>
        </SectionHeader>

        <SkillGrid>
          {skillGroups.map((group) => (
            <SkillCard key={group.category}>
              <CardHeader>
                <IconBox>{group.icon}</IconBox>
                <div>
                  <Category>{group.category}</Category>
                  <CardDescription>{group.description}</CardDescription>
                </div>
              </CardHeader>

              <SkillList>
                {group.skills.map((skill) => (
                  <SkillItem key={skill}>
                    <CheckIcon>
                      <FiCheckCircle size={16} />
                    </CheckIcon>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillGrid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.white};
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
  max-width: 900px;
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.article`
  padding: 32px;
  border-radius: 32px;
  border: 1px solid ${colors.border};
  background: ${colors.background};
  box-shadow: 0 22px 60px rgba(31, 31, 31, 0.05);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.34);
    box-shadow: 0 30px 80px rgba(31, 31, 31, 0.08);
  }

  @media (max-width: 640px) {
    padding: 26px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const IconBox = styled.div`
  flex: 0 0 auto;
  width: 58px;
  height: 58px;
  border-radius: 20px;
  background: rgba(59, 130, 246, 0.1);
  color: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.h3`
  margin: 0;
  color: ${colors.text};
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.05em;
`;

const CardDescription = styled.p`
  margin: 10px 0 0;
  color: ${colors.muted};
  font-size: 15px;
  line-height: 1.7;
  word-break: keep-all;
`;

const SkillList = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.1);
  background: rgba(255, 255, 255, 0.72);
  color: ${colors.text};
  font-size: 14px;
  font-weight: 800;
`;

const CheckIcon = styled.span`
  color: ${colors.accent};
  display: inline-flex;
`;
