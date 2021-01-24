using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CollegeSearchConsole
{
    class CollegeLookup
    {
        // holds the filepath for reference
        string filepath = @"C:\Users\benge\source\repos\CollegeSearch\CollegeSearchWinForm\bin\Debug\CollegeCity.txt";

        // calls the constructor method for a dictionary with a key value pair
        Dictionary<string, string> collegeCityDict = new Dictionary<string, string>();

        /// <summary>
        /// this is a constructor method because it has the same name as the class
        /// </summary>
        public CollegeLookup()
        {

            // shows we are reading the file. Incoming, not outgoing
            StreamReader inputFile;

            // try catch is used in case of read errors due to permissions
            try
            {
                // open
                inputFile = File.OpenText(filepath);
                // read
                while (!inputFile.EndOfStream)
                {
                    // reads the .txt file and saves the key and values into the array
                    string[] collCity = inputFile.ReadLine().Split(',');
                    // takes the first item in the array and converts to uppercase
                    string college = collCity[0].ToUpper();
                    // saves the value in the city string
                    string city = collCity[1];
                    // adds the key value pair into the dictionary
                    collegeCityDict.Add(college, city);
                }
                // close
                inputFile.Close();
            }
            catch (Exception ex)
            {
                // displays any error message
                Console.WriteLine(ex.Message);
            }
        }

        

        /// <summary>
        /// Used to search the dictionary for the key (userInput) and returns the value
        /// </summary>
        /// <param name="userInput"></param>
        /// <returns></returns>
        public string SearchDict(string userInput)
        {
            if (userInput == "RANDOM")
            {
                // creates instance of random class
                Random rand = new Random();
                // returns the count of the Dictionary
                int count = collegeCityDict.Count;
                // returns a random number within the count of dictionary
                int totalColleges = rand.Next(count);
                // returns the key at the random index
                string randCollege = collegeCityDict.ElementAt(totalColleges).Key;
                // Looks up the key and returns the value
                if (collegeCityDict.TryGetValue(randCollege, out string city)) { }
                return $"{randCollege}, {city}";
            }
            else
            {
                string city = null;
                // TryGetValue() takes the key and returns the corrosponding value
                if (collegeCityDict.TryGetValue(userInput, out city))
                {
                    return city;
                }
                // return null 
                return city;
            }
        }
    }
}
