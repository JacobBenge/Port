using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollegeSearchConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // call the constructor method to open the file and create a dictionary
            CollegeLookup collegeCity = new CollegeLookup();

            Console.WriteLine("Welcome to the College City Search App!");
            Console.WriteLine("-----------------------------------------");
            Console.WriteLine();
            Console.WriteLine("Please enter a College and I will return the city. (x to exit, random to get a random college and city)");
            Console.Write("College: ");
            // waits for user input
            string userInput = Console.ReadLine();

            // Need an infinite loop to keep the console open. Otherwise it closes automatically once the code runs
            while (userInput != "x")
            {
                // passes the userInput to SearchDict and returns the city
                string city = collegeCity.SearchDict(userInput.ToUpper());
                // uppercase version of userInput
                string upperUserInput = userInput.ToUpper();
                // for random college and city
                if(upperUserInput == "RANDOM")
                {
                    Console.WriteLine($"Random College: {city}");
                }
                else
                {
                    // if a valid value is returned then return the string below
                    if (city != null)
                    {
                        Console.WriteLine($"The location of {userInput} is{city}");
                    }
                    else
                    {
                        Console.WriteLine($"No results were found for {userInput}");
                    }
                }

                Console.WriteLine();
                Console.WriteLine("Please enter a College and I will return the city. (x to exit, random to get a random college and city)");
                Console.Write("College: ");
                // waits for user input
                userInput = Console.ReadLine();


            }

        }
    }
}
