using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JBStateCapSearchConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World");
            //Console.Write("My Name is: ");
            //Console.WriteLine("Jacob Benge");

            // call the constructor method to open the file. see StateCapitals.cs
            StateCapitals stateCapitals = new StateCapitals();

            Console.WriteLine("Welcome to the State Capital Search App!");
            Console.WriteLine("-----------------------------------------");
            Console.WriteLine();
            Console.WriteLine("Please enter a state and I will return the capital. (x to exit)");
            Console.Write("State: ");
            // waits for user input
            string userInput = Console.ReadLine();
            
            // Need an infinite loop to keep the console open. Otherwise it closes automatically once the code runs
            while (userInput != "x")
            {
                // passes the userInput to SearchDict and returns the capital
                string capital = stateCapitals.SearchDict(userInput.ToUpper());
                // if a valid value is returned then return the string below
                if (capital != null)
                {
                    Console.WriteLine($"The capital of {userInput} is {capital}");
                }
                else
                {
                    Console.WriteLine($"No results were found for {userInput}");
                }
                Console.WriteLine();
                Console.WriteLine("Please enter a state and I will return the capital. (x to exit)");
                Console.Write("State: ");
                // waits for user input
                userInput = Console.ReadLine();
            }
        }
    }
}
