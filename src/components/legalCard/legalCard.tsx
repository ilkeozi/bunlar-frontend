const LegalCard = (props: any) => {
  const { title, text, link, linkText } = props;

  return (
    <div className="legal-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};

export default LegalCard;
