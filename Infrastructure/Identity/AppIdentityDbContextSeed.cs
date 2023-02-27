using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Vitalii Tomenko",
                    Email = "laskadrin@gmail.com",
                    UserName = "Vitalii",
                    Address = new Address
                    {
                        FirstName = "Vitalii",
                        LastName = "Tomenko",
                        Street = "12 Shevchenko st",
                        City = "Nemyriv",
                        Region = "Vinnytsia"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}