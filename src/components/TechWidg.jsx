function TechWidg({ icons }) {
  return (
    <ul className="tech-widget">
      {icons &&
        icons.map(icon => {
          const IconComponent = icon.image;
          return (
            <li key={icon.id} className="tech-widget__item">
              <IconComponent className="tech-widget__icon" />
            </li>
          );
        })}
    </ul>
  );
}

export default TechWidg;
