using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace SwitchCase
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnDetails_Clicked(object sender, EventArgs e)
        {
            if (PckFruit.SelectedIndex > -1)
            {
                string fruit = PckFruit.SelectedItem.ToString();

                switch (fruit)
                {
                    case "Apple":
                        LblColor.Text = "Red";
                        LblPlantType.Text = "Tree";
                        LblPrice.Text = $"{1.99m.ToString("c")}/lb";
                        DisplayAlert("Fruit", "You selected apple", "Close");
                        break;
                    case "Canteloupe":
                        LblColor.Text = "Tan";
                        LblPlantType.Text = "Vine";
                        LblPrice.Text = $"{1.29m.ToString("c")}/lb";
                        DisplayAlert("Fruit", "You selected canteloupe", "Close");
                        break;
                    case "Watermelon":
                        LblColor.Text = "Green";
                        LblPlantType.Text = "Vine";
                        LblPrice.Text = $"{1.49m.ToString("c")}/lb";
                        DisplayAlert("Fruit", "You selected watermelon", "Close");
                        break;
                    case "Peach":
                        LblColor.Text = "Peach";
                        LblPlantType.Text = "Tree";
                        LblPrice.Text = $"{1.59m.ToString("c")}/each";
                        DisplayAlert("Fruit", "You selected peach", "Close");
                        break;
                    default:
                        DisplayAlert("Error", "Please select a fruit", "Close");
                        break;
                }
            }
            else
            {
                DisplayAlert("Input Error", "Please select a fruit first", "Close");
            }
        }

        private void BtnClear_Clicked(object sender, EventArgs e)
        {
            LblPrice.Text = "Results...";
            LblPlantType.Text = "Results...";
            LblColor.Text = "Results...";
            PckFruit.SelectedIndex = -1;
        }
    }
}
