using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Businesslayer;
using AccountDetails;
namespace layar_new
{ 
        public class TestMain
        {
            public static void Main(string[] args)
            {

            AccBusiness obj = new AccBusiness();
            AccDetails accDetails = new AccDetails
            {
                Accno = Convert.ToInt32(Console.ReadLine()),
                Acctype= Console.ReadLine(),
                debit = Convert.ToInt32(Console.ReadLine()),
                pin = Convert.ToInt32(Console.ReadLine()),
            };
            //int accNo = Convert.ToInt32(Console.ReadLine());
            obj.StoreData(accDetails);
            obj.showData(accDetails);
            Console.ReadKey();
            }
           
        }

    
}

