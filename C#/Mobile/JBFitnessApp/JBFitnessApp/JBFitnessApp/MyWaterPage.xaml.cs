//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Jensen)
//Date: 12/3/2020
//Project #: Project 8_B
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
using System.IO;

namespace JBFitnessApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MyWaterPage : ContentPage
    {
        const int WATER_GOAL = 8;
        string today = DateTime.Now.ToString("d").Replace('/','_');
        string documents = "";
        string filename = "";
        string filestored = "";
        int watercount = 0;


        public MyWaterPage()
        {
            InitializeComponent();
            // Generates today's date and converts it to a string to be added to the LblTodayDate
            LblWaterTodayDate.Text = LblWaterTodayDate.Text + DateTime.Now.ToString("d");

            GetFilePath();

            // if the file exists then find the most recent water count from today and update the GUI accordingly.
            if (File.Exists(filestored))
            {
                watercount = int.Parse(File.ReadAllLines(filestored).Last().ToString());

                for (int i = 0; i < watercount; i++)
                {
                    Image image = new Image { Source = "Water.jpg" };
                    SLWater.Children.Add(image);
                }
                LblWaterCount.Text = $"Water Count: {watercount}";
            }

        }
        /// <summary>
        /// Used to create a file using the date as the filename and to store water count. 
        /// </summary>
        private void GetFilePath()
        {
            //Find the system filepath
            documents = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            //Create the filename
            filename = $"{today}water.txt";
            //Concatenate filepath and filename
            filestored = Path.Combine(documents, filename);

        }
        private void BtnAddWater_Clicked(object sender, EventArgs e)
        {
            if (watercount < WATER_GOAL)
            {
                //create a new water image to display on the GUI
                var waterimage = new Image { Source = "Water.jpg" };
                //Add the image to the GUI
                SLWater.Children.Add(waterimage);
                //increment the watercount
                watercount ++;
                //Save the new water count in the file (this will create the file if none exists yet).
                File.WriteAllText(filestored, watercount.ToString());
                //Update the lable to the new water count
                LblWaterCount.Text = $"Water Count: {watercount}";
            }
            else
            {
                DisplayAlert("Water Goal Met","Congratulations! You have drank 8 glasses of water today.","Close");
            }
        }

        private void BtnWaterClose_Clicked(object sender, EventArgs e)
        {
            Application.Current.MainPage.Navigation.PopModalAsync();
        }
    }
}