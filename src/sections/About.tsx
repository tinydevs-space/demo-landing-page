import TwoColumnSection from "../components/TwoColumnSection";
import aboutImage from "../assets/about-illustration.svg";

const About = () => {
  return (
    <TwoColumnSection
      id="about"
      title="Nurturing Wellness, One Moment at a Time"
      image={aboutImage}
    >
      <p className="text-lg leading-relaxed text-gray-700">
        <span className="font-semibold text-emerald-600">EverGlow</span> helps you
        find peace within. We blend mindfulness, nature, and gentle guidance to help
        you feel centered, grounded, and renewed every day.
      </p>
    </TwoColumnSection>
  );
};

export default About;
