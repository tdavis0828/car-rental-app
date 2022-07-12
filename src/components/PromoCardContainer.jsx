import PromoCard from './PromoCard';
import { StyledContainer } from '../styles/Styles';

const PromoCardContainer = () => {
  return (
    <StyledContainer>
      <PromoCard
        img="https://images.unsplash.com/photo-1562146748-5cbf9bd1030e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="BMW on the back of a tow truck"
        header="Delivery"
        desc="Let us come to you. Participating locations offer our clients delivery
          on demand."
      />
      <PromoCard
        img="https://images.unsplash.com/photo-1624884269715-70759892cd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Cleaner spray bottle"
        header="Cleanliness Guarantee"
        desc="Our cars go through an extensive cleaning process to ensure the saftey of our clients."
      />
      <PromoCard
        img="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Man working on engine"
        header="Trusted Reliablity"
        desc="Our machanics run a 13-point inspection on every vehicle before every departure."
      />
      <PromoCard
        img="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Woman standing behind POS system"
        header="Concierge"
        desc="New to town? No problem! We can hook you up with some local amenities."
      />
    </StyledContainer>
  );
};

export default PromoCardContainer;
