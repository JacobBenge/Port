//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Tyler Jensen)
//Date: 12/10/2020
//Project #: 9_B
//I declare that the source code contained in this assignment was written solely by me.
//I understand that copying any source code, in whole or in part,
// constitutes cheating, and that I will receive a zero on this project
// if I am found in violation of this policy.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

// Gives the app the tools to read, write, open, and close the food.txt file.
using System.IO;
// For Assembly
using System.Reflection;

namespace JBFitnessApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class FoodDetailsPage : ContentPage
    {
        // Initializes new list of strings
        List<string> foodNames = new List<string>();
        // Initializes new list of strings
        List<FoodItem> FoodItems = new List<FoodItem>();

        public FoodDetailsPage()
        {
            InitializeComponent();

            // These two lines give access to the embedded food.txt
            var assembly = IntrospectionExtensions.GetTypeInfo(typeof(FoodDetailsPage)).Assembly;
            Stream stream = assembly.GetManifestResourceStream("JBFitnessApp.food.txt");

            // Intitializes a new array
            string[] foodItem;

            // Reads the food.txt file and stores the data in the foodItem array
            using (var reader = new StreamReader(stream))
            {
                // Begin reading
                reader.ReadLine();

                // Keep reading until cursor hits end of string
                while (!reader.EndOfStream)
                {
                    // Identifies the delimiter as tab
                    foodItem = reader.ReadLine().Split('\t');
                    //FoodNames.Add(foodItem[1]);
                    // Inserts the food into the Public FoodItem string array
                    FoodItem food = new FoodItem(foodItem);
                    // 
                    foodNames.Add(food.FoodName);
                    // added .ToString()
                    FoodItems.Add(food);

                };
                // Sorts alphabetically
                foodNames.Sort();
                // Inserts the foodNames into the PckrFood
                PckrFood.ItemsSource = foodNames;
                
            }

        }

        private void BtnDetails_Clicked(object sender, EventArgs e)
        {
            if (PckrFood.SelectedIndex > -1)
            {
                FoodItem selectedFood = null;

                foreach (FoodItem food in FoodItems)
                {
                    if (food.FoodName == PckrFood.SelectedItem.ToString())
                    {
                        selectedFood = food;
                        break;
                    }
                }
                if (selectedFood != null)
                {
                    DisplayAlert(selectedFood.FoodName, $"Category: {selectedFood.Category}\n\n" +
                     $"Measurement: {selectedFood.Measurement}\n\n" +
                     $"Calories: {selectedFood.Calories.ToString("n0")}", "Close");
                }
            }
            else
            {
                DisplayAlert("Input Error", "Please pick a food before pushing details", "Close");
            }
    }

        /// <summary>
        /// Sends user back to main page after close is clicked
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnFoodClose_Clicked(object sender, EventArgs e)
        {
            Application.Current.MainPage.Navigation.PopModalAsync();
        }
    }
}