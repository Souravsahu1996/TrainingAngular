using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccountDetails;

namespace Businesslayer
{
    public class AccBusiness
    {
        int d;
        public int StoreData(AccDetails accDetails)
        {
            int accNo = accDetails.Accno ;

            if (accNo > 10)
            {
                d = accNo;
                return d;
            }
            else
            {
                d = accNo + 10;
                return d;
            }
        }

        public void showData(AccDetails accDetails)
        {
            Console.WriteLine("{0}",accDetails.Accno);
        }
    }
}
