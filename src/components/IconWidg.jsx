function IconWidg({ icons }) {
  return (
    <ul className="icon-widget">
      {icons &&
        icons.map(icon => {
          const IconComponent = icon.image;
          return (
            <li key={icon.id} className="icon-widget__item">
              <IconComponent className="icon-widget__icon" />
            </li>
          );
        })}
    </ul>
  );
}

export default IconWidg;
