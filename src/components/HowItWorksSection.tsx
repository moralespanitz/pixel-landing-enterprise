export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              HOW IT WORKS
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#7D7D7D] mb-12" />

          {/* Main Headline */}
          <div className="max-w-4xl text-center mb-16 mx-auto">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Three Steps to Viral Content
            </h2>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Step 1 - Get Ideas */}
            <div className="bg-[#eeede6] border border-[#bebeb8] p-6">
              {/* Step Number */}
              <div className="mb-6">
                <span className="font-['Source_Code_Pro',monospace] text-[40px] text-[#ff6464]">
                  01
                </span>
              </div>

              {/* Step Title */}
              <h3
                className="text-[24px] md:text-[28px] text-black mb-4"
                style={{ fontFamily: "'HvDTrial Livory', serif" }}
              >
                Ten ideas
              </h3>

              {/* Step Description */}
              <p className="font-['Sora',sans-serif] text-[14px] text-[#31312f] leading-relaxed">
                Pregunta qué contenido crear, inspírate viendo qué hace tu competencia o cuéntale a Pixel algo que te haya sucedido. Transformamos tus historias en contenido con alta probabilidad de volverse viral.
              </p>
            </div>

            {/* Step 2 - Get Started */}
            <div className="bg-[#eeede6] border border-[#bebeb8] p-6">
              {/* Step Number */}
              <div className="mb-6">
                <span className="font-['Source_Code_Pro',monospace] text-[40px] text-[#ff6464]">
                  02
                </span>
              </div>

              {/* Step Title */}
              <h3
                className="text-[24px] md:text-[28px] text-black mb-4"
                style={{ fontFamily: "'HvDTrial Livory', serif" }}
              >
                Empieza la acción
              </h3>

              {/* Step Description */}
              <p className="font-['Sora',sans-serif] text-[14px] text-[#31312f] leading-relaxed">
                ¿Ya sabes qué contenido crear? Pixel lo convierte en uno que suene cómo tú y que transmita lo que quieres transmitir. Conecta con tu audiencia con contenido auténtico.
              </p>
            </div>

            {/* Step 3 - Feedback Loop */}
            <div className="bg-[#eeede6] border border-[#bebeb8] p-6">
              {/* Step Number */}
              <div className="mb-6">
                <span className="font-['Source_Code_Pro',monospace] text-[40px] text-[#ff6464]">
                  03
                </span>
              </div>

              {/* Step Title */}
              <h3
                className="text-[24px] md:text-[28px] text-black mb-4"
                style={{ fontFamily: "'HvDTrial Livory', serif" }}
              >
                Feedback loop
              </h3>

              {/* Step Description */}
              <p className="font-['Sora',sans-serif] text-[14px] text-[#31312f] leading-relaxed">
                Publica, mide y aprende. A mayores publicaciones, nuestra AI puede entender mejor lo que te funciona. Crea contenido diario y haz que tú y tu empresa lleguen a millones de personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
