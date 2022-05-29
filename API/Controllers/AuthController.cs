using AddressBook.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AddressBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> roleManager;

        public AuthController(UserManager<IdentityUser> userManager, IConfiguration configuration, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _configuration = configuration;
            this.roleManager = roleManager;
        }

        
        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginViewModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
           // var role = await roleManager.FindByIdAsync(user.Id);

            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var claim = new[] {
                   // new Claim(JwtRegisteredClaimNames.Email, user.Email)
                   new Claim(ClaimTypes.Email, user.Email),
                     new Claim(ClaimTypes.Name, user.UserName)

                };



                var signinKey = new SymmetricSecurityKey(
                  Encoding.UTF8.GetBytes(_configuration["JWT:key"]));

                // int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);
                int expiryInDays = Convert.ToInt32(_configuration["JWT:DurationInDays"]);

                var token = new JwtSecurityToken(
                  issuer: _configuration["JWT:Issuer"],
                  audience: _configuration["JWT:Audience"],
                  expires: DateTime.UtcNow.AddDays(expiryInDays),
                  claims: claim,
                  signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                );

                return Ok(
                  new
                  {
                      token = new JwtSecurityTokenHandler().WriteToken(token)
                      // expiration = token.ValidTo
                  });
            }
            return Unauthorized();
        }
        [HttpPost("Register")]

        public async Task<ActionResult> Register(RegisterModel model)
        {
            var user = new IdentityUser { UserName = model.fName, Email = model.email };
            var result = await _userManager.CreateAsync(user, model.password);

            if (result.Succeeded)
            {
            

            var signinKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["JWT:key"]));

            // int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);
            int expiryInDays = Convert.ToInt32(_configuration["JWT:DurationInDays"]);

            var token = new JwtSecurityToken(
              issuer: _configuration["JWT:Issuer"],
              audience: _configuration["JWT:Audience"],
              expires: DateTime.UtcNow.AddDays(expiryInDays),
              // claims: claim,
              signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
            );

            return Ok(
              new
              {
                  token = new JwtSecurityTokenHandler().WriteToken(token)
                  // expiration = token.ValidTo
              });

        }

            return BadRequest();

        }
    }
}
