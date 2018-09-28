using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace ConsoleApp1
{
    public class ClsPerson
    {
        public string name { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            ArrayList arryList1 = new ArrayList();
            bool acceptFlag = false;
            while (!acceptFlag)
            {
                ClsPerson obj = new ClsPerson();
                Console.WriteLine("Enter somee integer");
               string i = (Console.ReadLine().ToString());
                obj.name = i;
                arryList1.Add(obj);
               // cnt++;
                Console.WriteLine("DO YOU WANT TO CONTINUE?Y/N");
                char accept = char.Parse(Console.ReadLine().ToString().ToUpper());
                if (accept == 'Y')
                {
                    acceptFlag = true;
                }
                else
                {
                    acceptFlag = false;
                }
            }
            foreach (ClsPerson item in arryList1)
            {
                Console.WriteLine(item.name);
            }

            Console.ReadLine();
        }
    }
}
