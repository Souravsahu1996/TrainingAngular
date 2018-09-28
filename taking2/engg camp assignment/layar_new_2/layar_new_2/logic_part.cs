using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using business_layar;
using sourav;

namespace layar_new_2
{
    class logic_part
    {
        static void Main(string[] args)
        {

            strore obj = new strore();
            details obj1 = new details()
            {
             age= Convert.ToInt32(Console.ReadLine()),
             name = Console.ReadLine(),
                placeofbirth = Console.ReadLine(),
            };
            if (obj.can_vote(obj1))
            {
                obj.enter(obj1);
                obj.show(obj1);
            }
            else
                Console.WriteLine("sorry wrong input");
            Console.ReadKey();
        }
    }
}
