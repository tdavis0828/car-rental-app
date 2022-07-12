import { StyledCard } from '../styles/Styles';

const PromoCard = ({ img, alt, header, desc }) => {
  return (
    <StyledCard>
      <img src={img} alt={alt} />
      <div>
        <h3>{header}</h3>
        <p>{desc}</p>
        <button type="button">Learn More</button>
      </div>
    </StyledCard>
  );
};

export default PromoCard;
