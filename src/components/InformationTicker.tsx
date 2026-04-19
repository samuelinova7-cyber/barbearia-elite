export default function InformationTicker() {
  const infoItems = [
    "Cortes Ilimitados por Assinatura",
    "Estética Capilar Avançada",
    "Agende pelo App",
    "3 Unidades Concept em Alagoas",
    "Cerveja Gelada e Networking",
    "Visagismo de Alto Padrão",
    "Tradição e Modernidade",
    "Elite Studio Barber - Referência em Estilo",
  ];

  const duplicatedItems = [...infoItems, ...infoItems, ...infoItems];

  return (
    <div className="marquee-container fixed top-[72px] lg:top-[88px] left-0 right-0 z-[45] bg-gold-elite/95 backdrop-blur-md text-black-deep py-2 border-y border-gold-elite shadow-2xl">
      <div className="marquee-content font-bold uppercase tracking-widest text-[10px]">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="mx-8">
            {item}
            <span className="ml-8 text-black-deep/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
