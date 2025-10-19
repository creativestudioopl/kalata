import { Clock, Users, Home, Trophy } from 'lucide-react';

const statsData = [
{
  icon: Clock,
  value: "25+",
  label: "Lata na rynku"
},
{
  icon: Users,
  value: "100+",
  label: "Klientów"
},
{
  icon: Home,
  value: "150+",
  label: "Realizacji"
}];


const StatsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.mak-bud.com.pl/wp-content/uploads/2021/11/Mak-Bud_Realizacje_20_org.jpg")'
      }}>

      <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
      
      <div
        className="absolute top-0 h-full bg-primary transform -skew-x-[20deg] hidden lg:block"
        style={{
          width: '33.33vw',
          right: '-15vw'
        }}
        aria-hidden="true">
      </div>

      <div className="container py-24 relative z-10">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-16 text-foreground !whitespace-pre-line">Ważne informacje o firmie Kalata Budownictwo

        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8">
          {statsData.map((stat, index) =>
          <div key={index} className="flex flex-col items-center text-center space-y-4">
              <stat.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
              <p className="text-stats-number font-bold !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                {stat.value}
              </p>
              <p className="text-lg text-foreground">
                {stat.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;