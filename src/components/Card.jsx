const Card = ({ imageUrl, header, description }) => {
    return (
      <div className="relative max-w-xs rounded overflow-hidden shadow-lg transition-transform transform rounded-3xl">
        <img
          src={imageUrl}
          alt="Card Background"
          className="w-full h-16 object-cover filter -translate-y-11"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white p-1">
          <div className="font-bold text-sm mb-1">{header}</div>
          <p className="text-gray-700 text-xs font-HankenGrotesk">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  