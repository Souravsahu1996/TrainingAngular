using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using sourav;

namespace business_layar
{
    public class strore
    {
        public bool can_vote(details obj)
        {
            int age = obj.age;
            if (age > 18)
                return true;
            else
                return false;
        }
        public details enter(details obj1)
        {
            int age = obj1.age;
            string name = obj1.name;
            string pob = obj1.placeofbirth;
            return obj1;
        }
        public void show(details obj)
        {
            Console.WriteLine("{0},{1},{2}", obj.age, obj.name, obj.placeofbirth);
        }

    }
}
