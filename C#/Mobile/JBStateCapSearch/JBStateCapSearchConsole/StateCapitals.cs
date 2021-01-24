using System;
using System.Collections.Generic;
using System.IO;

namespace JBStateCapSearchConsole
{
    class StateCapitals
    {
        // holds the filepath for reference
        string filepath = @"C:\Users\benge\source\repos\JBStateCapSearch\JBStateCapSearchWinForm\bin\Debug\StateCapitals.txt";

        // calls the constructor method for a dictionary with a key value pair
        Dictionary<string, string> stateCapDict = new Dictionary<string, string>();

        /// <summary>
        /// this is a constructor method because it has the same name as the class
        /// </summary>
        public StateCapitals()
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
                    // reads the .txt file and saves the key and values into the stcp array
                    string[] stcp = inputFile.ReadLine().Split(',');
                    // takes the first item in the array and converts to uppercase
                    string state = stcp[0].ToUpper();
                    // saves the value in the capital string
                    string capital = stcp[1];
                    // adds the key value pair into the dictionary
                    stateCapDict.Add(state, capital);
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
            // instantiates the string capital
            string capital = null;

            // TryGetValue() takes the key and returns the corrosponding value
            if (stateCapDict.TryGetValue(userInput, out capital))
            {
                return capital;
            }
            return capital;
        }
    }
}
