using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace PizzaOrder
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnOrder_Clicked(object sender, EventArgs e)
        {
            if (SwtchCheese.IsToggled || SwtchPepperoni.IsToggled || SwtchPineapple.IsToggled)
            {
                if (PckCrust.SelectedIndex > -1)
                {
                    if (LstViewCity.SelectedItem.ToString() != "")
                    {
                        string toppings = "";
                        string crust = PckCrust.SelectedItem.ToString();
                        string city = LstViewCity.SelectedItem.ToString();
                        toppings = SwtchCheese.IsToggled ? "Cheese " : 
                            toppings +=SwtchPepperoni.IsToggled ? "Pepperoni " : 
                            toppings += SwtchPineapple.IsToggled ? "Pineapple " : "";
                        DisplayAlert("Pizza Order", $"{crust} pizza with {toppings}. Delivered to {city}", "Close");
                    }
                    else
                    {
                        DisplayAlert("Invalid Input", "Please select a city.", "Close");
                    }
                }
                else
                {
                    DisplayAlert("Invalid Input", "Please select a crust.", "Close");
                }
            }
            else
            {
                DisplayAlert("Invalid Input", "Please select at least one topping.", "Close");
            }
        }
    }
}
