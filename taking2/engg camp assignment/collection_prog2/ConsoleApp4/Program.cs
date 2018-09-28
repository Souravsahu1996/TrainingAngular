using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    using System;
    public abstract class Account
    {
        public int accno, debit, pin;
        public string type, login, password;
        public double balance;
        public Account()
        {

        }
        public Account(int accno, int debit, int pin, string type, string login, string password, double balance)
        {
            this.accno = accno;
            this.debit = debit;
            this.pin = pin;
            this.type = type;
            this.login = login;
            this.password = password;
            this.balance = balance;

        }
    }
    public class Current : Account
    {
        public string compname, typebus, contctname, web;
        public Current()
        {

        }
        public Current(int accno, int debit, int pin, string type, string login, string password, double balance, string compname, string typebus, string contctname, string web) : base(accno, debit, pin, type, login, password, balance)
        {
            this.compname = compname;
            this.typebus = typebus;
            this.contctname = contctname;
            this.web = web;
        }
    }
    public class Savings_Corporate : Account
    {
        public string companyname;
        public Savings_Corporate()
        {

        }
        public Savings_Corporate(int accno, int debit, int pin, string type, string login, string password, double balance, string companyname) : base(accno, debit, pin, type, login, password, balance)
        {
            this.companyname = companyname;
        }
    }
    public class AccountManager
    {
        public Account CreateAccount(Account acc)
        {
            if (acc is Current)
            {
                return new Current(1123, 123, 456, "current", "sgh", "jhsjhsf", 35545.45, "xccv", "it", "sdfyty", "www.com");
            }
            else
            {
                return new Savings_Corporate(635, 50, 5333, "saving", "ertr", "wyetwrt", 55557.8, "Okk");
            }
        }
    
        public void DisplayAccount(Account acc)
        {
            Console.WriteLine("{0},{1},{2},{3},{4},{5}", acc.accno,acc.debit,acc.pin,acc.type,acc.login,acc.password);
            if (acc is Current)
            {
                Current temp = (Current)acc;
                Console.WriteLine("{0},{1},{2},{3}", temp.compname, temp.typebus, temp.contctname, temp.web);
                    Console.WriteLine();
            }
            else
            {
                Savings_Corporate temp = (Savings_Corporate)acc;
                Console.WriteLine("{0}", temp.companyname);
            }

        }
    }

   

    class Program
    {
        static void Main(string[] args)
        {
            Account c = new Current();
            Account c1 = new Savings_Corporate();
            AccountManager a = new AccountManager();
            a.CreateAccount(c);
            a.CreateAccount(c1);
            a.DisplayAccount(c);
            a.DisplayAccount(c1);
        }
    }
}
