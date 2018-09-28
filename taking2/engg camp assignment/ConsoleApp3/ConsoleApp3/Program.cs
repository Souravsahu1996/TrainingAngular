using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue st = new Queue();
            st.Enqueue("string 1");
            st.Enqueue("string 2");
            st.Enqueue("string 4");
            st.Enqueue("string 5");
            st.Dequeue();
            st.Dequeue();
            st.Enqueue("string 3");
            st.Enqueue("string 4");
            st.Enqueue("string 5");
            foreach (var i in st)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine("THE TOPMOST ITYEM:{0}", st.Peek());
        }
    }
}
